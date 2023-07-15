package pe.com.gourmet.restaurant.infrastructure.adapter;

import org.springframework.stereotype.Repository;
import pe.com.gourmet.restaurant.application.repository.UserRepository;
import pe.com.gourmet.restaurant.domain.User;
import pe.com.gourmet.restaurant.infrastructure.adapter.dao.UserJpaRepository;
import pe.com.gourmet.restaurant.infrastructure.entity.UserEntity;
import pe.com.gourmet.restaurant.infrastructure.mapper.UserMapper;

import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository {

    private final UserJpaRepository userJpaRepository;
    private final UserMapper userMapper;

    public UserRepositoryImpl(UserJpaRepository userJpaRepository, UserMapper userMapper) {
        this.userJpaRepository = userJpaRepository;
        this.userMapper = userMapper;
    }

    @Override
    public List<User> getUsers() {
        List<UserEntity> userEntities = userJpaRepository.findAll();
        return userMapper.usersEntityToUsers(userEntities);
    }

    @Override
    public User findById(Long id) {
        UserEntity userEntity = userJpaRepository.findById(id).orElse(null);
        return userMapper.userEntityToUser(userEntity);
    }

    @Override
    public User create(User user) {
        UserEntity userEntity = userJpaRepository.save(userMapper.userToUserEntity(user));
        return userMapper.userEntityToUser(userEntity);
    }

    @Override
    public User update(Long id, User user) {
        UserEntity userEntity = userJpaRepository.findById(id).orElse(null);

        userEntity.setDni(user.getDni());
        userEntity.setUsername(user.getUsername());
        userEntity.setFirstname(user.getFirstname());
        userEntity.setLastname(user.getLastname());
        userEntity.setPassword(user.getPassword());
        userEntity.setEmail(user.getEmail());
        userEntity.setAddress(user.getAddress());
        userEntity.setCellphone(user.getCellphone());
        userEntity.setUserType(user.getUserType());;

        UserEntity userEntitySaved = userJpaRepository.save(userEntity);

        return userMapper.userEntityToUser(userEntitySaved);
    }

    @Override
    public void deleteById(Long id) {
        userJpaRepository.deleteById(id);
    }

    @Override
    public User findByUsername(String username) {
        UserEntity userEntity = userJpaRepository.findOneByUsername(username).orElse(null);
        return userMapper.userEntityToUser(userEntity);
    }

    @Override
    public Boolean existsByUsername(String username) {
        return userJpaRepository.existsByUsername(username);
    }
}
