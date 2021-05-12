import { datadogRum } from "@datadog/browser-rum";
import {applicationId, clientToken} from "./keys"

export const DD_RUM = () => {
  return datadogRum.init({
    applicationId: applicationId,
    clientToken: clientToken,
    site: "datadoghq.com",
    service: "rums-272-error-boundary",
    version: "1.0.0",
    sampleRate: 100,
    trackInteractions: true,
    // beforeSend: (event) => {
    //   if (
    //     event.type === "error" &&
    //     event.error.source === "console" &&
    //     event.error.message.includes("at ") &&
    //     event.error.message.includes(".js:")
    //   ) {
    //     return false;
    //   }
    // }
  });
};
