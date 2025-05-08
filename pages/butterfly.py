import streamlit as st

st.markdown("""
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Butterfly App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Species</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Diseases</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Defects</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Stages</a></li>
            </ul>
        </div>
    </div>
</nav>
""", unsafe_allow_html=True)

