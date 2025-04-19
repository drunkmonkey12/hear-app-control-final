
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.659ec80470b14517992c5f24c2ce72bd',
  appName: 'hear-flow-control',
  webDir: 'dist',
  server: {
    url: 'https://659ec804-70b1-4517-992c-5f24c2ce72bd.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
