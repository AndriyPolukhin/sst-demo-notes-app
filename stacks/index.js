// App Infrastructure

import { App } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";
import { ApiStack } from "./ApiStack";
import { AuthStack } from "./AuthStack";
import { FrontendStack } from "./FrontendStack";

/**
 * @param {App} app
 */
export default function main(app) {
	app.setDefaultFunctionProps({
		runtime: "nodejs16.x",
		srcPath: "services",
		bundle: {
			format: "esm",
		},
	});

	/**
	 * Adds additional default environment variables to be applied to all Lambda functions in the app.
		addDefaultFunctionEnv(environment)


	* Adds a default function permission
		app.addDefaultFunctionPermissions({
			"MY_ENV_VAR": "my-value"
		})
	*/

	// Default removal policy
	app.setDefaultRemovalPolicy(app.local ? "destroy" : "retain");
	// Here we concatenate stacks
	app.stack(StorageStack).stack(ApiStack).stack(AuthStack).stack(FrontendStack);
}
