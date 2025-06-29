package settingup.Junit;

/**
 * Hello world!
 */
import static org.junit.Assert.*;

import org.junit.Test;

public class App {

    @Test
    public void testAddition() {
        int result = 2 + 3;
        assertEquals(5, result);
    }
}
