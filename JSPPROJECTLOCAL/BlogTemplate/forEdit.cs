<div class="container">
    <div class="row">
        <!-- Blog Content -->
        <div class="col-lg-8">
            <div class="post-content">
                <h1>@Model.CurrentPost.Title</h1>
                <p>@Model.CurrentPost.PublishedDate.ToString("MMMM dd, yyyy")</p>
                <img src="@Model.CurrentPost.ImageUrl" class="img-fluid" alt="Post Image" />
                <p>@Model.CurrentPost.Content</p>
            </div>
        </div>

        <!-- Recent Posts Sidebar -->
        <div class="col-lg-4">
            <div class="recent-posts">
                <h4>Recent Posts</h4>
                <ul class="list-unstyled">
                    @foreach (var post in Model.RecentPosts)
                    {
                        <li>
                            <a href="@Url.Action("Details", "Blog", new { id = post.Id })">@post.Title</a>
                            <span>@post.PublishedDate.ToString("MMMM dd, yyyy")</span>
                        </li>
                    }
                </ul>
            </div>
        </div>
    </div>

    <!-- Related Posts Section -->
    <div class="related-posts mt-5">
        <h4>Related Posts</h4>
        <div class="row">
            @foreach (var post in Model.RelatedPosts)
            {
                <div class="col-md-4">
                    <div class="card">
                        <img src="@post.ImageUrl" class="card-img-top" alt="Related Post Image">
                        <div class="card-body">
                            <h5 class="card-title">@post.Title</h5>
                            <p class="card-text">@post.Content.Substring(0, Math.Min(100, post.Content.Length))...</p>
                            <a href="@Url.Action("Details", "Blog", new { id = post.Id })" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
</div>
