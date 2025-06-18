

public class TestLogger {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("Logging from logger1");

        Logger logger2 = Logger.getInstance();
        // Logger logger2 = new Logger();  ---- this will make another logger to be created
        logger2.log("Logging from logger2");

        if (logger1 == logger2) {
            System.out.println("Success: Only one instance of Logger exists.");
        } else {
            System.out.println("Error: Multiple instances of Logger exist.");
        }
    }
}
