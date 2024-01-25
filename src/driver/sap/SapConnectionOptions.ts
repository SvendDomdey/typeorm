import { BaseDataSourceOptions } from "../../data-source/BaseDataSourceOptions"
import { SapConnectionCredentialsOptions } from "./SapConnectionCredentialsOptions"

/**
 * SAP Hana specific connection options.
 */
export interface SapConnectionOptions
    extends BaseDataSourceOptions,
        SapConnectionCredentialsOptions {
    /**
     * Database type.
     */
    readonly type: "sap"

    /**
     * Database schema.
     */
    readonly schema?: string

    //Options for implicit pooling
    readonly pooling?: boolean

    readonly maxPoolSize?: number

    readonly poolingCheck?: boolean

    readonly connectionLifetime?: number

    readonly communicationTimeout?: number
}
