import { AuthService } from './auth/auth.service';
import { PostsService } from './posts/posts.service';
import { CategoriesService } from './categories/categories.service';
import { CommentsService } from './comments/comments.service';
import { AdminService } from './admin/admin.service';

export const services = [
  AuthService,
  PostsService,
  CategoriesService,
  CommentsService,
  AdminService
];
