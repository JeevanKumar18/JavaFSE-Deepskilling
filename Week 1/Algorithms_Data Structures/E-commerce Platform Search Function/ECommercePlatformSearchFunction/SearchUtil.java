public class SearchUtil {

    // Count variables
    public static int linearSteps = 0;
    public static int binarySteps = 0;

    // Linear Search
    public static Product linearSearch(Product[] products, String name) {
        linearSteps = 0;
        for (Product p : products) {
            linearSteps++;
            if (p.productName.equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, String name) {
        binarySteps = 0;
        int low = 0, high = products.length - 1;

        while (low <= high) {
            binarySteps++;
            int mid = (low + high) / 2;
            int compare = name.compareToIgnoreCase(products[mid].productName);

            if (compare == 0) return products[mid];
            else if (compare < 0) high = mid - 1;
            else low = mid + 1;
        }
        return null;
    }
}
