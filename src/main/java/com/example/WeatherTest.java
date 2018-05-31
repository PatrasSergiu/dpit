package com.example;

import tk.plogitech.darksky.api.jackson.DarkSkyJacksonClient;
import tk.plogitech.darksky.forecast.*;
import tk.plogitech.darksky.forecast.model.Forecast;
import tk.plogitech.darksky.forecast.model.Latitude;
import tk.plogitech.darksky.forecast.model.Longitude;

public class WeatherTest {


    public static Longitude longitude = new Longitude(23.591423);
    public static Latitude latitude = new Latitude(46.770439);

    public static String weatherKey = "ffba03be60f52eca3bf1203c676f4081";
    public static String timeKey = "L9RV69672U59";


    public static void main(String[] args) throws ForecastException {
        ForecastRequest request = new ForecastRequestBuilder()
                .key(new APIKey(weatherKey))
                .location(new GeoCoordinates(longitude, latitude)).build();

        DarkSkyJacksonClient client = new DarkSkyJacksonClient();
        Forecast forecast = client.forecast(request);
        System.out.println("forecast " + forecast);
        System.out.println("forecast " + forecast.getCurrently().getTemperature());
    }
}
