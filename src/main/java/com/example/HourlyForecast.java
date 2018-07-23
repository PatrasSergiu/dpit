package com.example;

import tk.plogitech.darksky.forecast.*;
import tk.plogitech.darksky.forecast.model.Forecast;
import tk.plogitech.darksky.forecast.model.Latitude;
import tk.plogitech.darksky.forecast.model.Longitude;

import tk.plogitech.darksky.forecast.model.Currently;

public class HourlyForecast {


    public static Longitude longitude = new Longitude(23.591423);
    public static Latitude latitude = new Latitude(46.770439);
    public static String weatherKey = "ffba03be60f52eca3bf1203c676f4081";
    public static String timeKey = "L9RV69672U59";

    public String getWeather() {
        try {
            ForecastRequest request = new ForecastRequestBuilder()
                    .key(new APIKey(weatherKey))
                    .exclude(ForecastRequestBuilder.Block.currently)
                    .exclude(ForecastRequestBuilder.Block.minutely)
                    .exclude(ForecastRequestBuilder.Block.daily)
                    .exclude(ForecastRequestBuilder.Block.alerts)
                    .exclude(ForecastRequestBuilder.Block.flags)
                    .language(ForecastRequestBuilder.Language.en)
                    .location(new GeoCoordinates(longitude, latitude)).build();
            DarkSkyClient client = new DarkSkyClient();
            String forecast = client.forecastJsonString(request);
            return forecast;

        } catch(Exception e) {
            return "Something went wrong";
        }
    }
    public static void main(String[] args)  {


    }
}
