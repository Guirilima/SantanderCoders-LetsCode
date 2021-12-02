package br.lets.code.temperatureconverter;

import org.apache.logging.log4j.util.Strings;

import java.math.BigDecimal;
import java.util.Scanner;

public class MainApplication {

    private static final String VALUE_SEPARATE = "-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- - ";
    private static final String VALUE_RESPONSE = "Resp: ";
    private static final String SPACES = "\n \n";

    private static final BigDecimal VALUE_KEVIN = new BigDecimal("273.15");
    private static final BigDecimal VALUE_REAUMUR = new BigDecimal("0.8");
    private static final BigDecimal VALUE_RANKINE_01 = new BigDecimal("1.8");
    private static final BigDecimal VALUE_RANKINE_02 = new BigDecimal("491.67");
    private static final BigDecimal VALUE_FAHRENHEIT_01 = new BigDecimal("1.8");
    private static final BigDecimal VALUE_FAHRENHEIT_02 = new BigDecimal("32");

    public static void main(String[] args) {
        /**
         * Faça um programa que, com um valor inicial em Celsius, a converta e exiba em
         * Kevin (K) ,
         * Reaumur (Re) ,
         * Rankine (Ra) ,
         * Fahrenheit (F) .
         */

        /* Envs Config */
        Scanner receiver  = new Scanner(System.in);
        String repeat = null;
        /* Envs Config */

        /* Logic Start */
        do {
            System.out.println(VALUE_SEPARATE);
            System.out.println("| Olá digite o valor de entrada para conversor de Celsius á -> (K)/(Re)/(Ra)/(F) <- |");
            System.out.println(VALUE_SEPARATE);
            System.out.print(VALUE_RESPONSE);
            String valueCelsius = receiver .nextLine();

            System.out.print(SPACES);

            System.out.println("Tabela de Conversão -:");
            System.out.println("Kevin      (K) : " + calculateKevin(valueCelsius));
            System.out.println("Reaumur   (Re) : " + calculateReaumur(valueCelsius));
            System.out.println("Rankine   (Ra) : " + calculateRankine(valueCelsius));
            System.out.println("Fahrenheit (F) : " + calculateFahrenheit(valueCelsius));

            System.out.print(SPACES);

            System.out.println("Desejar continuar ?");
            System.out.println("R: SIM / NAO");
            System.out.print(VALUE_RESPONSE);
            repeat = receiver.nextLine();
        } while (!Strings.isBlank(repeat) && repeat.equalsIgnoreCase("SIM")) ;
        /* Logic final */

        System.out.println(SPACES + "Muito obrigado pela participação. \n Até logo <3 ");
    }

    /* Auxiliary Methods  */

    private static String calculateKevin(String Celsius) {
        return new BigDecimal(Celsius).add(VALUE_KEVIN).toString();
    }

    private static String calculateReaumur(String Celsius) {
        return new BigDecimal(Celsius).multiply(VALUE_REAUMUR).toString();
    }

    private static String calculateRankine(String Celsius) {
        return (new BigDecimal(Celsius).multiply(VALUE_RANKINE_01)).add(VALUE_RANKINE_02).toString();
    }

    private static String calculateFahrenheit(String Celsius) {
        return (new BigDecimal(Celsius).multiply(VALUE_FAHRENHEIT_01)).add(VALUE_FAHRENHEIT_02).toString();
    }
}
