import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData={
    UserPoolId:"us-east-1_sJPPomxJg",
    ClientId:"7tjnu35qacojp41f9chld5m96c"
}

export default new CognitoUserPool(poolData);
