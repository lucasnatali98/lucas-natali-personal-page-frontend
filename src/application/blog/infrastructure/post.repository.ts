import axios, { type AxiosInstance } from "axios";
import type { BlogPost } from "../domain/post";

class PostRepository {
  private apiClient: AxiosInstance;

  constructor(baseURL: string) {
    this.apiClient = axios.create({
      baseURL,
    });
  }

  async getAllPosts(): Promise<BlogPost[]> {
    try {
      const response = await this.apiClient.get<BlogPost[]>("/posts");
      return response.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }

  async getPostById(id: string): Promise<BlogPost | null> {
    try {
      const response = await this.apiClient.get<BlogPost>(`/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching post with id ${id}:`, error);

      return null;
    }
  }

  async createPost(
    post: Omit<BlogPost, "id" | "createdAt">
  ): Promise<BlogPost | null> {
    try {
      const response = await this.apiClient.post<BlogPost>("/posts", post);
      return response.data;
    } catch (error) {
      console.error("Error creating post:", error);
      return null;
    }
  }

  async updatePost(
    id: string,
    post: Partial<Omit<BlogPost, "id" | "createdAt">>
  ): Promise<BlogPost | null> {
    try {
      const response = await this.apiClient.put<BlogPost>(`/posts/${id}`, post);
      return response.data;
    } catch (error) {
      console.error(`Error updating post with id ${id}:`, error);
      return null;
    }
  }

  async deletePost(id: string): Promise<void> {
    try {
      await this.apiClient.delete(`/posts/${id}`);
    } catch (error) {
      console.error(`Error deleting post with id ${id}:`, error);
    }
  }
}

export default PostRepository;
