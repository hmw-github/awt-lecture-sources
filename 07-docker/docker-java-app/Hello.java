import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Hello {
    public static void main(String[] args) {
        System.out.println("================================");
        System.out.println("Hello World from Docker!");
        System.out.println("================================");
        
        // Display current date and time
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
        System.out.println("Current time: " + now.format(formatter));
        
        // Some system information
        System.out.println("\nSystem Information:");
        System.out.println("- Java Version: " + System.getProperty("java.version"));
        System.out.println("- OS: " + System.getProperty("os.name"));
        System.out.println("- User: " + System.getProperty("user.name"));
        
        // Display arguments if provided
        if (args.length > 0) {
            System.out.println("\nArguments received:");
            for (int i = 0; i < args.length; i++) {
                System.out.println("  [" + i + "] " + args[i]);
            }
        }
        
        System.out.println("\n✓ Application completed successfully!");
    }
}