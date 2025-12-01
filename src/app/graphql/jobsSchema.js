import { gql } from "graphql-tag";
import Job from "@/models/Job";
import dbConnect from "@/lib/db"; // adjust if your connection file is named differently

// GraphQL type definitions
export const typeDefs = gql`
  type Job {
    id: ID!
    title: String!
    description: String!
    company: String!
    location: String!
    salary: Int
    jobType: String
  }

  type Query {
    jobs: [Job]
    job(id: ID!): Job
  }

  type Mutation {
    addJob(
      title: String!
      description: String!
      company: String!
      location: String!
      salary: Int
      jobType: String
    ): Job

    updateJob(
      id: ID!
      title: String
      description: String
      company: String
      location: String
      salary: Int
      jobType: String
    ): Job

    deleteJob(id: ID!): Boolean
  }
`;

// GraphQL resolvers
export const resolvers = {
  Query: {
    jobs: async () => {
      await dbConnect();
      return await Job.find();
    },
    job: async (_, { id }) => {
      await dbConnect();
      return await Job.findById(id);
    },
  },
  Mutation: {
    addJob: async (_, { title, description, company, location, salary, jobType }) => {
      await dbConnect();
      const job = await Job.create({ title, description, company, location, salary, jobType });
      return job;
    },
    updateJob: async (_, { id, title, description, company, location, salary, jobType }) => {
      await dbConnect();
      const job = await Job.findByIdAndUpdate(
        id,
        { title, description, company, location, salary, jobType },
        { new: true }
      );
      return job;
    },
    deleteJob: async (_, { id }) => {
      await dbConnect();
      const result = await Job.findByIdAndDelete(id);
      return !!result;
    },
  },
};
