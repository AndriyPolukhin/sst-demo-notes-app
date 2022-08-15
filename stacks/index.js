import { MyStack } from './MyStack'
import { App } from '@serverless-stack/resources'

/**
 * @param {App} app
 * details: App Infrastructure
 */
export default function (app) {
	app.setDefaultFunctionProps({
		runtime: 'nodejs16.x',
		srcPath: 'services',
		bundle: {
			format: 'esm'
		}
	})
	// Here we concatenate stacks
	app.stack(MyStack)
}
