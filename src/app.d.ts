// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

import type { IStaticMethods } from "flyonui/flyonui";
declare global {
	interface Window {
    // FlyonUI
     HSStaticMethods: IStaticMethods;
  }
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
