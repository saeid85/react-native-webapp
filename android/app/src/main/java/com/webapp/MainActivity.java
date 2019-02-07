package com.webapp;

import android.os.Bundle; // Splash Screen
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; // Splash Screen

public class MainActivity extends ReactActivity {

    // Splash Screen
    @Override
    protected void onCreate(Bundle savedInstanceState) {
      SplashScreen.show(this);  // here
      super.onCreate(savedInstanceState);
    }
  
    @Override
    protected String getMainComponentName() {
        return "webapp";
    }
}
