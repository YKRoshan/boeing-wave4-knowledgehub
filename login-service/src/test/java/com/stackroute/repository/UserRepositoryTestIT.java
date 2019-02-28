//package com.stackroute.repository;
//
//import com.stackroute.domain.User;
//import org.junit.After;
//import org.junit.Assert;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.context.junit4.SpringRunner;
//import java.util.Optional;
//
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//public class UserRepositoryTestIT {
//    @Autowired
//    private UserRepository userRepository;
//    private User user;
//
//    @Before
//    public void setUp() throws Exception{
//       User user = new User();
//       user.setId((long)23);
//       user.setUsername("knowledge");
//       user.setPassword("password");
//        userRepository.save(user);
//    }
//
//    @After
//    public void tearDown() throws Exception {
//        user=null;
//
//    }
//
//    @Test
//    public void findByUserNameSuccess(){
//        Optional<User> fetchedUser=userRepository.findByUsername("knowledge");
//        Assert.assertEquals("knowledge",fetchedUser.get().getUsername());
//    }
//    @Test
//    public void findByUserNameFailure(){
//        Optional<User> fetchedUser=userRepository.findByUsername("knowledge");
//        Assert.assertNotEquals("knowledgeHub",fetchedUser.get().getUsername());
//    }
//}