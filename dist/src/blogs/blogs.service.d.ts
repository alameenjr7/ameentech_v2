import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogDto, UpdateBlogDto } from '../../libs/dto/blog.dto';
import { SearchDto } from '../../libs/global/search.dto';
import { SharpService } from '../../libs/sharp/sharp.service';
export declare class BlogsService {
    private prisma;
    private sharpService;
    constructor(prisma: PrismaService, sharpService: SharpService);
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
    findAll(searchDto?: SearchDto): Promise<{
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
    findOne(id: number): Promise<{
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
    update(id: number, updateBlogDto: UpdateBlogDto, file?: Express.Multer.File): Promise<{
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
    remove(id: number): Promise<{
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
