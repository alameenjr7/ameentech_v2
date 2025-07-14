import { BlogsService } from './blogs.service';
import { CreateBlogDto, UpdateBlogDto } from '../../libs/dto/blog.dto';
import { SearchDto } from '../../libs/global/search.dto';
export declare class BlogsController {
    private readonly blogsService;
    constructor(blogsService: BlogsService);
    create(createBlogDto: CreateBlogDto, file?: Express.Multer.File): Promise<{
        title: string;
        link: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        date: string;
        excerpt: string;
        image: string;
        id: number;
    }>;
    findAll(searchDto: SearchDto): Promise<{
        title: string;
        link: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        date: string;
        excerpt: string;
        image: string;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        title: string;
        link: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        date: string;
        excerpt: string;
        image: string;
        id: number;
    }>;
    update(id: string, updateBlogDto: UpdateBlogDto, file?: Express.Multer.File): Promise<{
        title: string;
        link: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        date: string;
        excerpt: string;
        image: string;
        id: number;
    }>;
    remove(id: string): Promise<{
        title: string;
        link: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        date: string;
        excerpt: string;
        image: string;
        id: number;
    }>;
}
