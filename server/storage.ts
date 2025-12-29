import { db } from "./db";
import {
  services,
  jobs,
  contactMessages,
  type InsertService,
  type InsertJob,
  type InsertContactMessage,
  type Service,
  type Job,
  type ContactMessage
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  getJobs(): Promise<Job[]>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  seedData(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getService(id: number): Promise<Service | undefined> {
    const [service] = await db.select().from(services).where(eq(services.id, id));
    return service;
  }

  async getJobs(): Promise<Job[]> {
    return await db.select().from(jobs);
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(message).returning();
    return newMessage;
  }

  async seedData(): Promise<void> {
    const existingServices = await this.getServices();
    if (existingServices.length === 0) {
      await db.insert(services).values([
        {
          title: "Wireless",
          description: "Innovative Solutions for 5G and next-gen networks.",
          fullContent: "According to reports, 5G is on track to account for 15 per cent of global mobile connections by 2025. We provide cutting-edge wireless solutions to help you stay ahead in this rapidly evolving landscape.",
          icon: "Wifi"
        },
        {
          title: "IoT",
          description: "Smart Solutions for a connected world.",
          fullContent: "While sensors have been in use for a long time, the rise of Internet of Things has accelerated the evolution of sensors. More than 50 bn devices will be connected to the Internet. We help you leverage this connectivity.",
          icon: "Cpu"
        },
        {
          title: "Testing",
          description: "Complete test solutions and technical assistance.",
          fullContent: "We can provide complete test solution including Test plan creation based on the functional specification, test case execution, identifying and executing regression cases, executing interoperability tests, field test execution and technical assistance.",
          icon: "ClipboardCheck"
        }
      ]);
    }

    const existingJobs = await this.getJobs();
    if (existingJobs.length === 0) {
      await db.insert(jobs).values([
        {
          title: "Wireless Engineer",
          location: "Bengaluru, India",
          type: "Full-time",
          description: "Looking for an experienced Wireless Engineer with 5G expertise."
        },
        {
          title: "IoT Developer",
          location: "Bengaluru, India",
          type: "Full-time",
          description: "Join our team to build smart solutions for connected devices."
        }
      ]);
    }
  }
}

export const storage = new DatabaseStorage();
