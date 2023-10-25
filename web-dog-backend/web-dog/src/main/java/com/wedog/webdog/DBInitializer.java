package com.wedog.webdog;

import com.wedog.webdog.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class DBInitializer implements CommandLineRunner {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public void run(String... args) throws Exception {
        //Creates users in the database
        User firstUser = new User();
        firstUser.setUsername("Bat Georgi");
        firstUser.setFirstName("Georgi");
        firstUser.setLastName("Georgiev");
        firstUser.setPassword("313233");
        firstUser.setAvatar("Insert Picture");
        firstUser.setDescription("Very spicy boy");
        entityManager.persist(firstUser);

        User secondUser = new User();
        secondUser.setUsername("Bai Ivan");
        secondUser.setFirstName("Ivan");
        secondUser.setLastName("Ivanov");
        secondUser.setPassword("313233");
        secondUser.setAvatar("Insert Picture");
        secondUser.setDescription("Very lazy boy");
        entityManager.persist(secondUser);

    }
}
