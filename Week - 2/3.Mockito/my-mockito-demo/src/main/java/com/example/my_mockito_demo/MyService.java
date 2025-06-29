package com.example.my_mockito_demo;

public class MyService {
    private MyDependency dependency;

    public MyService(MyDependency dependency) {
        this.dependency = dependency;
    }

    public void performAction() {
        dependency.doSomething();
    }
}
