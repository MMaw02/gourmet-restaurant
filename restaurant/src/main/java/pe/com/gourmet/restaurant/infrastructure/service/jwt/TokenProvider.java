package pe.com.gourmet.restaurant.infrastructure.service.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Component
@Slf4j
public class TokenProvider {

    private final static String SECRET = "casdQhhJWMkGBYSoObNSs1D541f651FujfFsySNsyIsnSUYgoi88j565b67ojON7533vmIKMlNgvE3579kOMKnYVEd54fjpmKb87y0KOBrd53EDFcws3";

    private final JwtParser jwtParser;
    private final Key key;

    public TokenProvider() {
        byte[] secretBytes = Decoders.BASE64.decode(SECRET);
        key = Keys.hmacShaKeyFor(secretBytes);
        jwtParser = Jwts.parserBuilder().setSigningKey(key).build();
    }

    public String createToken(Authentication authentication) {
        Long durationInMilli = 3600 * 24 * 30L;
        Long newInMilli = new Date().getTime();
        Date expirationDate = new Date(newInMilli + durationInMilli);
        String role = authentication.getAuthorities()
                .stream()
                .map(a -> a.getAuthority())
                .collect(Collectors.joining(","));

        return Jwts.builder()
                .setSubject(authentication.getName())
                .claim("auth", role)
                .signWith(key, SignatureAlgorithm.HS512)
                .setExpiration(expirationDate)
                .compact();
    }

    public Authentication getAuthentication(String token) {
        Claims claims = jwtParser.parseClaimsJws(token).getBody();

        List<SimpleGrantedAuthority> authorities = Arrays
                .stream(claims.get("auth").toString().split(","))
                .filter(auth -> !auth.trim().isEmpty())
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());

        User principal = new User(claims.getSubject(), "", authorities);
        return new UsernamePasswordAuthenticationToken(principal, token, authorities);
    }

    public boolean validate(String token) {
        try {
            jwtParser.parseClaimsJws(token);
            return true;
        } catch (JwtException e) {
            log.error("Token validation error {}", e.getMessage());
        }
        return false;
    }
}
