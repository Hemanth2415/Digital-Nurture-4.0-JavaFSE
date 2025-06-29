package com.test.AAAJunit;

import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class AAATest {

    private int a;
    private int b;

    @Before
    public void setUp() {
        a = 10;
        b = 5;
        System.out.println("Setup complete");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown complete\n");
    }

    @Test
    public void testAddition() {
        int result = a + b;

        assertEquals(15, result);
    }

    @Test
    public void testMultiplication() {
        int result = a * b;

        assertEquals(50, result);
    }
}

