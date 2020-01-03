import { NativeModules, NativeEventEmitter, Platform } from 'react-native';

const EyeTracking = NativeModules.EyeTracking;

class EyeTracking extends NativeEventEmitter {
  constructor() {
    super(EyeTracking);
  }


  start() {
    return EyeTracking.onCreate();
  }



  createCameraSource() {
    return EyeTracking.createCameraSource();
  }

  stop() {

    return EyeTracking.stop();

  }

  pause() {
    return EyeTracking.onPause();

  }

  resume() {
    return EyeTracking.onResume();
  }

}

export default new EyeTracking();
