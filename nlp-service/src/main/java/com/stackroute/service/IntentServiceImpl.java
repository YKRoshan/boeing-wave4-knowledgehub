package com.stackroute.service;
import com.stackroute.domain.Intent;
import com.stackroute.repository.IntentRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class IntentServiceImpl implements IntentService {
    private IntentRepository intentRepository;

    public IntentServiceImpl(IntentRepository intentRepository) {
        this.intentRepository = intentRepository;
    }



    public ArrayList<String> getIntents()
    {
        ArrayList<Intent> intents=new ArrayList<>(intentRepository.getAllIntents());
        ArrayList<String> intentNames=new ArrayList<>();
        for(int i=0;i<intents.size();i++)
        {
            intentNames.add(intents.get(i).getName());
        }
        return intentNames;
    }
}




