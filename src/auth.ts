import { updateBaseConfigApiToken } from "./bmapi/config";

// FOR INTERNAL TESTING
// export const SERVER_BASE_URL = "https://localhost:7001";
export const SERVER_BASE_URL = "https://brewman.premiersystems.com";

interface BrewmanApiConfigurationOptions {
  /**
   * This can be found under Administration -> Your Company ->
   * User Setup -> API Security.
   *
   * The name of the field is "Current API Token". You may need to
   * click "Create Token" if the field is blank.
   */
  apiToken: string;

  /**
   * This is the unique identifier for the tenant that the API will
   * interact with.
   *
   * This can be found under Administration -> Your Company ->
   * User Setup -> API Security.
   *
   * The name of the field is "Current Tenant ID".
   *
   * You will need to supply this value in the request payload to
   * nearly all of our API methods.
   */
  tenantId: string;
}

export const brewmanApiConfiguration: BrewmanApiConfigurationOptions = {
  apiToken: "",
  tenantId: "",
};

/**
 * Initialises the BrewMan API client with your credentials.
 *
 * This must be called once at the application entrypoint before any
 * API calls are made.
 *
 * @param options apiToken and tenantId from BrewMan.
 */
export function configureBrewmanApi(
  options: BrewmanApiConfigurationOptions
): void {
  Object.assign(brewmanApiConfiguration, options);
  updateBaseConfigApiToken(brewmanApiConfiguration.apiToken);
}
