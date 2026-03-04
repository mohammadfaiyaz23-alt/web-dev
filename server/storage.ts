import { db } from "./db";
import { messages, type CreateMessageRequest, type MessageResponse } from "@shared/schema";

export interface IStorage {
  createMessage(message: CreateMessageRequest): Promise<MessageResponse>;
}

export class DatabaseStorage implements IStorage {
  async createMessage(message: CreateMessageRequest): Promise<MessageResponse> {
    const [newMessage] = await db.insert(messages).values(message).returning();
    return newMessage;
  }
}

export const storage = new DatabaseStorage();
