declare module "email-signature-detector" {
  interface From {
    email: string;
    displayName: string;
  }
  export const getSignature: (body: string, from?: From, bodyNoSig?: boolean) => string;
  export const removeSignature: (body: string, from?: From) => string;
}
