package Singleton;

public class Main {
    public static void main(String[] args) {
        Logger obj1 = Logger.getInstance();
        Logger obj2 = Logger.getInstance();

        if (obj1 == obj2) {
            System.out.println("Singleton works. Only one instance exists.");
        } else {
            System.out.println("Singleton failed. Different instances exist.");
        }
    }
}

class Logger {
    private static Logger obj = new Logger();

    private Logger() {
        System.out.println("Instance Created");
    }
    
    public static Logger getInstance() {
        return obj;
    }
}
