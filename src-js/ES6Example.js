// Modules
import * as moduleExample from './ModuleExample'
import {exportedVariable} from './ModuleExample'

export class ES6Example {
	constructor(logger = console.log){
		this.logger = logger;
	}
	// Default parameters in functions
	defaultParameters(name = 'Mr. Stranger'){
		this.logger('Default parameters in functions')
		if(name === 'Mr. Stranger'){
			this.logger(`Using default parameter ${name}\n`);
		}else{
			this.logger(`Using provided parameter ${name}\n`);
		}
	}
	// Template Literals
	templateLiterals(name = 'Mr. Stranger'){
		this.logger('Template Literals')
		this.logger(`Hi ${name}, my name is ES6Example!`)
		this.logger('Code: Hi ${name}, my name is ES6Example!\n')
	}
	// Multi-line Strings
	multiLineStrings(){
		this.logger('Multi-line Strings')
		this.logger(`This is an example of the usage of 
			multi-line strings in ES6. It's a really nice feature
			because we no longer need to wrap all our text by 
			quotes and join them with ' + '\n`);
	}
	// Destructuring assignments
	destructuringAssignments (){
		this.logger('Destructuring assignments')
		var objectWithTonsOfKeys = {
			I: 0,
			am: 1,
			an: 2,
			object: 3,
			with: 4,
			tons: 5,
			of: 6,
			keys: 7
		}

		var {object, tons, keys} = objectWithTonsOfKeys;
		this.logger(`Now I have all of those key values in variables!
			object: ${object},
			tons: ${tons},
			keys: ${keys}\n`)
	}

	// Arrow Functions
	arrowFunctions (){
		this.logger('Arrow Functions')
		var array = ['Functions', 'are', 'smaller!']
		array.forEach((word) => this.logger(`Inline arrow function ${word}`), this);
		array.forEach((word) => {
			this.logger(`Block arrow function!!! ${word}`);
		}, this);
		this.logger('\n')
	}

	// Promises
	promises(){
		var logger = this.logger;
		logger('Promises\n');
		var p = Promise.resolve([1,2,3]);
		p.then(function(v) {
		  logger('I am the resolved promise: ', v[0]); 
		});
	}

	// Block Scopes
	blockScopes(){
		this.logger('Block Scopes')
		var varIsFunctionScoped = 'I can be accessed anywhere within blockScopes';
		if(varIsFunctionScoped){
			var stillFunctionScoped = 'I can still be accessed anywhere within blockScopes';
			let letIsBlockScoped = 'I only exist within this block, not outside';
			const constIsBlockScopedToo = 'I also only exist within this block, but I\'m immutable';
		}
		this.logger(varIsFunctionScoped+'\n')
		// Error: this.logger(letIsBlockScoped)
		// Error: this.logger(constIsBlockScopedToo)
	}

	// Classes
	classes(){
		this.logger('Classes')
		var BaseClass = class BaseClass {
			constructor(){
				this.parentProperty = 'A+';
			}
		}

		var NewClass = class NewClass extends BaseClass {
			constructor(){
				super()
				this.childProperty = 'B'
			}
			get fullProperty (){
				return this.parentProperty + this.childProperty
			}
		}

		var newClassInstance = new NewClass();
		this.logger('parentProperty', newClassInstance.parentProperty);
		this.logger('childProperty', newClassInstance.childProperty);
		this.logger('fullProperty', newClassInstance.fullProperty+'\n');
	}

	// Modules
	modules(){
		this.logger('Modules')
		this.logger('Imported Variable', moduleExample.exportedVariable);
		this.logger('Imported Function',moduleExample.exportedFunction());
		this.logger('Imported Class');
		new moduleExample.exportedClass();

		this.logger('Imported Variable once again', exportedVariable+'\n');
	}
}