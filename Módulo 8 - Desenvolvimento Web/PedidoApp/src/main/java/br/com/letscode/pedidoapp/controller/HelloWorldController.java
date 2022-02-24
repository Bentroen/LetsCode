package br.com.letscode.pedidoapp.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/hello")
public class HelloWorldController {

    @GetMapping
    public String hello(Model model) {

        model.addAttribute("nome", "Bentroen");

        return "hello";
    }

}
