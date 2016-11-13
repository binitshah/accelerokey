package com.evader.rookies.accelerokey;

import android.app.Activity;
import android.content.Context;
import android.graphics.Color;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.hardware.*;
import android.util.Log;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;

import java.util.HashMap;
import java.util.List;

public class MainActivity extends Activity implements SensorEventListener {
    String s = new String("");
    private SensorManager sensorManager;
    private Sensor sensor;
    private float values[] = {0.0f, 0.0f, 0.0f};
    private Movements[] movements = new Movements[5];
    private RelativeLayout relativeLayout;
    FirebaseDatabase firebaseDatabase;
    TextView v;
    int counter = 0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        relativeLayout = (RelativeLayout)(findViewById(R.id.activity_main));
        movements[0] = new Movements("NOMOVEMENTS", true);
        movements[1] = new Movements("LEFT", false);
        movements[2] = new Movements("RIGHT", false);
        movements[3] = new Movements("TILTAWAY", false);
        movements[4] = new Movements("TILTTOWARDS", false);
        sensorManager = (SensorManager) this.getSystemService(Context.SENSOR_SERVICE);
        sensor = sensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER);
        sensorManager.registerListener(this,sensor,SensorManager.SENSOR_DELAY_UI);

        v = (TextView)(findViewById(R.id.textView));
        Log.d("ACC", "OnCreate: " + v.getText());

    }

    @Override
    public void onSensorChanged(SensorEvent sensorEvent) {
        processMovement(sensorEvent.values);
//        v.setText(processMovement(sensorEvent.values)[0] + "   y:  " + processMovement(sensorEvent.values)[1]
//                + "  z:   " + processMovement(sensorEvent.values)[2]);
        String movement = "";
        for(Movements m : movements) {
            if (m.getToSend() == true) {
                movement += m.getMovementType() + " ";
            }
        }
        v.setText(movement);
        Log.d("ACC", "OnSenorChanged: " + v.getText());
        if (counter == 0) {
            firebaseDatabase = FirebaseDatabase.getInstance();
            DatabaseReference databaseReference = firebaseDatabase.getReference("movement");
            databaseReference.setValue(movement);
        }

    }

    @Override
    public void onAccuracyChanged(Sensor sensor, int i) {
        Log.d("ACC", "OnAccuracyChanged: " + v.getText());
    }

    private float[] processMovement(float[] r) {
        for (Movements x : movements) {
            x.setToSend(false);
        }
        if (counter < 3) {
            values[0] += r[0];
            values[1] += r[1];
            values[2] += r[2];
            counter++;
        }
        else {
            for (int d = 0; d < values.length; d++) {
                values[d] = values[d] / 3.0f;
            }
            if (values[0] < -8.5 && values[0] > -10.5 && values[1] < 0.55
                    && values[1] > -0.55 && values[2] < 2.0 && values[2] > -2.0) {
                movements[0].setToSend(true);
                relativeLayout.setBackgroundColor(Color.BLUE);
            }
            if (values[0] < -8.5 && values[0] > -10.5 /*&& r[2] < 2.0 && r[2] > -2.0*/) {
                if (values[1] > 0.55) {
                    movements[1].setToSend(true);
                    relativeLayout.setBackgroundColor(Color.YELLOW);
                }
                else if (values[1] < -0.55) {
                    movements[2].setToSend(true);
                    relativeLayout.setBackgroundColor(Color.CYAN);
                }

            }
            //if (r[0] > -9.0  && r[1] < 0.7  && r[1] > -0.7 && r[2] > 3.0) {
            if (values[2] > 3.0) {
                movements[3].setToSend(true);
                relativeLayout.setBackgroundColor(Color.LTGRAY);
            }
            //  if (r[0] > -9.0 && r[1] < 0.7 && r[1] > -0.7 && r[2] < - 2.80) {
            if (values[2] < -2.80) {
                movements[4].setToSend(true);
                relativeLayout.setBackgroundColor(Color.GREEN);
            }
            counter = 0;
            values[0] = 0.0f;
            values[1] = 0.0f;
            values[2] = 0.0f;
        }




        return r;
    }
}
