import { db } from "@/lib/db";

export const getStreamByUserId = async (userId: string) => {
    const stream = await db.stream.findFirst({
        where: {
            userId,
        },
    });

    return stream;
}