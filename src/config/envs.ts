/* eslint-disable @typescript-eslint/no-non-null-assertion */
function validateEnvs(envs: Record<string, string | undefined>) {
  const missingEnvs = Object.entries(envs)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingEnvs.length) {
    throw new Error(`Missing environment variables: ${missingEnvs.join(', ')}`);
  }
}

function getEnvs() {
  const envs = {
    baseUrlApi: process.env.NEXT_PUBLIC_BASE_URL_API!,
  };

  validateEnvs(envs);

  return envs;
}

const envs = getEnvs();

export default envs;
