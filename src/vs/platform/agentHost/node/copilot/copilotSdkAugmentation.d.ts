/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

/**
 * Extends the installed `@github/copilot-sdk` types with fields that are
 * present in the runtime wire protocol (`SessionOpenOptions` in `rpc.rs`) but
 * not yet reflected in the published npm package types.
 *
 * Remove each augmentation once the SDK package is republished with the
 * corresponding type included.
 */

// `export {}` is required to make this file a module (not a global ambient
// script). Without it `declare module` would be an *ambient module declaration*
// that replaces the SDK's own types instead of augmenting them.
export { };

declare module '@github/copilot-sdk' {
	interface SessionConfigBase {
		/**
		 * When `true`, the runtime self-fetches enterprise managed settings
		 * (`/copilot_internal/managed_settings` + device MDM) at session bootstrap
		 * using the session's GitHub auth, and enforces bypass-permissions policy
		 * fail-closed before the first turn.
		 *
		 * Defined in `SessionOpenOptions.selfFetchManagedSettings` in
		 * `copilot-agent-runtime/src/native/sdk-contract/src/api/rpc.rs`.
		 * TODO: remove once `@github/copilot-sdk` ships the field in its types.
		 */
		selfFetchManagedSettings?: boolean;
	}
}
