package chun.li.GStack.Console.reports;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.file.Files;
import java.nio.file.Paths;

@Controller
@RequestMapping("/")
public class ResourceController {
    @GetMapping("*/{dir:css|js|fonts|images|js}/*")
    public String redirect(@PathVariable("dir") String dir, HttpServletRequest request) {
        String url = request.getRequestURI();
        url = url.substring(url.indexOf("/", 1));
        return "forward:" + url;
    }

    @Value("${gstack.report}")
    private String reportPath;

    @GetMapping("**/*.html")
    public @ResponseBody
    byte[] page(HttpServletRequest request) throws IOException {
        return Files.readAllBytes(Paths.get(reportPath, URLDecoder.decode(request.getRequestURI(), "utf-8")));
    }
}
