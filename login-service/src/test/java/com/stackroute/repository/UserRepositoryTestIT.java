package com.stackroute.repository;

import com.netflix.discovery.shared.Application;
import com.stackroute.config.TestConfig;
import com.stackroute.domain.User;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import javax.persistence.PersistenceContext;
import java.util.Optional;

//
//@RunWith(SpringRunner.class)
//@SpringBootTest

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {
        Application.class,
        TestConfig.class})
@ActiveProfiles("test")

public class UserRepositoryTestIT {
    @Autowired
    private UserRepository userRepository;

    private User user;

    @Before
    public void setUp() throws Exception{
       User user = new User();

       user.setUsername("knowledge");
       user.setPassword("password");
       userRepository.save(user);
    }

    @After
    public void tearDown() throws Exception {
        user=null;
        userRepository.deleteAll();
    }

    @Test
    public void findByUserNameSuccess(){
        Optional<User> fetchedUser=userRepository.findByUsername("knowledge");
        Assert.assertEquals("knowledge",fetchedUser.get().getUsername());
    }
    @Test
    public void findByUserNameFailure(){
        Optional<User> fetchedUser=userRepository.findByUsername("knowledge");
        Assert.assertNotEquals("knowledgeHub",fetchedUser.get().getUsername());
    }
}