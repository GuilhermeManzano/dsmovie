import Pagination from "components/Pagination"
import MovieCard from "components/MovieCard"

function Listing() {
    return (
        <>
            <Pagination />

            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div class="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div class="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div class="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div class="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div class="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div class="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                    <div class="col-sm-6 col-lg-4 col-xl-3">
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;