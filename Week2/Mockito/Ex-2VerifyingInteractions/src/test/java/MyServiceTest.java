import org.example.ExternalApi;
import org.example.MyService;
import org.junit.Test;
import static org.mockito.Mockito.*;


public class MyServiceTest
{

    @Test
    public void testVerifyInteraction()
    {

        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        service.fetchData();
        verify(mockApi).getData();
    }
}