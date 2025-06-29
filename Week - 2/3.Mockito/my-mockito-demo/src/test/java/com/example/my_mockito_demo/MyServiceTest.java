package com.example.my_mockito_demo;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testPerformAction_callsDependency() {
        MyDependency mockDependency = mock(MyDependency.class);

        MyService service = new MyService(mockDependency);

        service.performAction();

        verify(mockDependency).doSomething();
    }
}
