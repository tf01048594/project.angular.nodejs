import { PoolConnection , Query } from "mysql";
import appConnectionPool from "../app";

export abstract class AbstractDao {
    protected connectionPool: PoolConnection;
    constructor() {
        this.connectionPool = appConnectionPool;
    }

    protected getQuery(query : Query) : Query {
        return query;
    }
}
