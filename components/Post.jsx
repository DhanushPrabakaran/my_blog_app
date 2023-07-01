import clock from "@public/clock.svg";
import Image from "next/image";
const Post = () => {
  return (
    <div className=" bg-slate-300 bg-opacity-80 rounded-md  p-4 flex flex-col items-center  ">
      <div className="font-bold font-serif text-4xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ullam?
      </div>
      <div className="flex mt-4 mb-4 ">
        <div className="flex mr-5">
          <Image src={clock} width={30} className="mr-1" />
          <div className="text-center"> 04/2004</div>
        </div>
        <div>
          <div>Author : Ram</div>
        </div>
      </div>
      <pre className="whitespace-pre-wrap text-justify text-xl font-sans">{`
A blog (a truncation of "weblog")[1] is an informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological o
rder so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.

The emergence and growth of blogs in the late 1990s coincided with the advent of web publishing tools that facilitated the posting of content by non-technical users who did not have much experience with HTML or computer programming. Previously, knowledge of such technologies as HTML and File Transfer Protocol had been required to publish content on the Web, and early Web users therefore tended to be hackers and computer enthusiasts. In the 2010s, the majority are interactive Web 2.0 websites, allowing visitors to leave online comments, and it is this interactivity that distinguishes them from other static websites.[2] In that sense, blogging can be seen as a form of social networking service. Indeed, bloggers not only produce content to post on their blogs but also often build social relations with their readers and other bloggers.[3] Blog owners or authors often moderate and filter online comments to remove hate speech or other offensive content. There are also high-readership blogs which do not allow comments.

Many blogs provide commentary on a particular subject or topic, ranging from philosophy, religion, and arts to science, politics, and sports. Others function as more personal online diaries or online brand advertising of a particular individual or company. A typical blog combines text, digital images, and links to other blogs, web pages, and other media related to its topic. Most blogs are primarily textual, although some focus on art (art blogs), photographs (photoblogs), videos (video blogs or "vlogs"), music (MP3 blogs), and audio (podcasts). In education, blogs can be used as instructional resources; these are referred to as edublogs. Microblogging is another type of blogging, featuring very short posts.

'Blog' and 'blogging' are now loosely used for content creation and sharing on social media, especially when the content is long-form and one creates and shares content on regular basis. So, one could be maintaining a blog on Facebook or blogging on Instagram. Blogging is writing about what you like. In other words, writing about what you know and providing valuable information to people searching for it.

A 2022 estimate suggested that there were over 600 million public blogs out of more than 1.9 billion websites.      `}</pre>
    </div>
  );
};

export default Post;
