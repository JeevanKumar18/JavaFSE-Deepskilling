import java.util.Arrays;
import java.util.Comparator;

public class TestSearch {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Phone", "Electronics"),
            new Product(3, "Shoes", "Footwear"),
            new Product(4, "T-shirt", "Clothing")
        };

        // Linear Search
        Product found1 = SearchUtil.linearSearch(products, "Phone");
        System.out.println("Linear Search Result: " + found1);
        System.out.println("Linear Search Steps Count: " + SearchUtil.linearSteps);

        // Sort for binary search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));
        Product found2 = SearchUtil.binarySearch(products, "Phone");
        System.out.println("Binary Search Result: " + found2);
        System.out.println("Binary Search Steps Count: " + SearchUtil.binarySteps);
    }
}
