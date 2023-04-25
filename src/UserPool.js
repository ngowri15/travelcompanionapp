import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData={
    UserPoolId:"us-east-1_7rsMnrjyE",
    ClientId:"20psbibn59eh3655lo2ms96qd7"
}

export default new CognitoUserPool(poolData);
