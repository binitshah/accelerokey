package com.evader.rookies.accelerokey;

/**
 * Created by adityanadkarni on 11/12/16.
 */

public class Movements {
    private boolean toSend;
    private String movementType;

    public Movements(String movementType, boolean toSend) {

        this.toSend = toSend;
        this.movementType = movementType;
    }

    public boolean getToSend() {
        return toSend;
    }

    public void setToSend(boolean toSend) {
        this.toSend = toSend;
    }

    public String getMovementType() {
        return movementType;
    }
}
