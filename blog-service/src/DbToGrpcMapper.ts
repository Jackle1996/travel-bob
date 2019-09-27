import { Blog, Blogpost, Timestamp } from "../../api/grpc-ts/blogposts_pb";

import { IDbBlog, DbBlog } from "./models/Blog";
import { IDbBlogpost, DbBlogpost } from "./models/Blogpost";
import { isNullOrUndefined } from "util";

/*
 * Helper class to simplify the work with gRPC and database objects.
 */
export class DbGrpcMapper {

    Convert(blogsFromDb: IDbBlog[]): Blog[];
    Convert(blogpostsFromDb: IDbBlogpost[]): Blogpost[];
    Convert(grpcBlog: Blog): IDbBlog;
    Convert(grpcBlogpost: Blogpost): IDbBlogpost;

    /*
     * Convert db objects to gRPC objects and vice versa.
     *
     * Supported conversions:
     *
     * DB to gRPC
     * - IDbBlog[] to Blog[]
     * - IDbBlogpost[] to Blogpost[]
     *
     * gRPC to DB
     * - Blog to IDbBlog
     */
    Convert(input: IDbBlog[] | IDbBlogpost[] | Blog | Blogpost)
        : Blog[] | Blogpost[] | IDbBlog | IDbBlogpost {

        if (input instanceof Blog) {

            console.log('[DbGrpcMapper] Convert Blog to IDbBlog.');
            return this.ConvertGrpcBlogToDbBlog(input as Blog);

        } else if (input instanceof Blogpost) {

            console.log('[DbGrpcMapper] Convert Blogpost to IDbBlogpost.');
            return this.ConvertGrpcBlogpostToDbBlogpost(input as Blogpost);

        } else if (Array.isArray(input) && input.every(i => isNullOrUndefined(i.blogId))) {

            console.log('[DbGrpcMapper] Convert IDbBlog[] to Blog[].');
            return this.ConvertDbBlogsToGrpc(input as IDbBlog[]);

        } else if (Array.isArray(input) && input.every(i => !isNullOrUndefined(i.blogId))) {

            console.log('[DbGrpcMapper] Convert IDbBlogpost[] to Blogpost[].');
            return this.ConvertDbBlogpostsToGrpcBlogpost(input as IDbBlogpost[]);

        } else {

            console.error(`[DbGrpcMapper] Error: Could not convert ${input}.`);
            return null;
        }
    }

    /*
     * Takes a list of blog objects from the database and
     * converts them into gRPC blog objects.
     */
    private ConvertDbBlogsToGrpc(blogsFromDb: IDbBlog[]): Blog[] {

        const grpcBlogs: Blog[] = new Array<Blog>();

        if (!isNullOrUndefined(blogsFromDb)) {

            blogsFromDb.forEach(blogFromDb => {

                const grpcBlog: Blog = new Blog();

                grpcBlog.setId(blogFromDb.id);
                grpcBlog.setBlogimageurl(blogFromDb.blogImageUrl);
                grpcBlog.setDescription(blogFromDb.description);
                grpcBlog.setAuthor(blogFromDb.author);
                grpcBlog.setTitle(blogFromDb.title);
                grpcBlog.setDestination(blogFromDb.destination);
                const startDate: Timestamp = new Timestamp();
                startDate.setSeconds(blogFromDb.startUnixTimestamp);
                grpcBlog.setStartdate(startDate);
                const endDate: Timestamp = new Timestamp();
                endDate.setSeconds(blogFromDb.endUnixTimestamp);
                grpcBlog.setEnddate(endDate);

                grpcBlogs.push(grpcBlog);
            });
        }

        return grpcBlogs;
    }

    /*
     * Takes a gRPC blog object and converts it into a database blog object.
     */
    private ConvertGrpcBlogToDbBlog(grpcBlog: Blog): IDbBlog {

        const blog: IDbBlog = new DbBlog();

        blog.id = grpcBlog.getId();
        blog.blogImageUrl = grpcBlog.getBlogimageurl();
        blog.description = grpcBlog.getDescription();
        blog.author = grpcBlog.getAuthor();
        blog.title = grpcBlog.getTitle();
        blog.destination = grpcBlog.getDestination();
        blog.startUnixTimestamp = grpcBlog.getStartdate().getSeconds();
        blog.endUnixTimestamp = grpcBlog.getEnddate().getSeconds();

        return blog;
    }

    /*
     * Takes a list of blogpost objects from the database and
     * converts them into gRPC blogpost objects.
     */
    private ConvertDbBlogpostsToGrpcBlogpost(blogpostsFromDb: IDbBlogpost[]): Blogpost[] {

        const postsForResponse: Blogpost[] = new Array<Blogpost>();

        if (!isNullOrUndefined(blogpostsFromDb)) {

            blogpostsFromDb.forEach(postFromDb => {

                const post: Blogpost = new Blogpost();

                post.setBlogid(postFromDb.blogId);
                post.setHeaderimageurl(postFromDb.headerImageUrl);
                post.setId(postFromDb.id);
                post.setLocation(postFromDb.location);
                post.setText(postFromDb.text);
                post.setTitle(postFromDb.title);
                const travelDate = new Timestamp();
                travelDate.setSeconds(postFromDb.travelDateUnixTimestamp);
                post.setTraveldate(travelDate);
                post.setSummary(postFromDb.summary);

                postsForResponse.push(post);
            });
        }

        return postsForResponse;
    }

    /*
     * Takes a gRPC blogpost object and converts it into a database blogpost object.
     */
    private ConvertGrpcBlogpostToDbBlogpost(grpcBlogpost: Blogpost): IDbBlogpost {

        const post: IDbBlogpost = new DbBlogpost();
        post.id = grpcBlogpost.getId();
        post.headerImageUrl = grpcBlogpost.getHeaderimageurl();
        post.title = grpcBlogpost.getTitle();
        post.text = grpcBlogpost.getText();
        post.blogId = grpcBlogpost.getBlogid();
        post.travelDateUnixTimestamp = grpcBlogpost.getTraveldate().getSeconds();
        post.location = grpcBlogpost.getLocation();
        post.summary = grpcBlogpost.getSummary();

        return post;
    }
}