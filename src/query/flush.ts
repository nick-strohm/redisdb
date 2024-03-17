import { resourceName } from "..";
import { redisClient } from "../database";

export async function flushDb(callback: (data: string | null) => any) {
    ScheduleResourceTick(resourceName)
    try {
        const result = await redisClient.flushDb();
        return callback ? callback(result) : result;
    } catch (error: any) {
        return console.error("Redis error while setting data: " + error.message)
    }
}