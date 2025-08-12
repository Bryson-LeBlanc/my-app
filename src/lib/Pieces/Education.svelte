<script lang='ts'>

</script>

<div class="block">
    <div id="head" class="flexStack">
        <div class="education section">
            <h2>Education</h2>
            <div class="content">
            <div class="flexLine">
                <img src="src/lib/still/auburn.png" alt="school" class="school-icon">
                <div class="school">
                <h4>Auburn University</h4>
                <h5>BSE - Software Engineering</h5>
                <h6>2022 - 2026</h6>
                </div>
            </div>
            <ul>
                <li>Dean's list - 2023, 2024, 2025</li>
                <li>3.85 GPA</li>
                <li>True Blue Scholarship Recipient</li>
                <li>Douglas L. McCrary Endowed Scholarship Recipient</li>
            </ul>
            </div>
        </div>
        <div class="certifications section">
            <h2>Certifications</h2>
            <div class="content">
            </div>
        </div>
    </div>
</div>

<style>
    h2 {
        color : var(--color-e);
        margin-left:20px;
    }

    h2 {
        margin-left:30%;
    }
    h4 {
        margin-top:30px;
        margin-bottom: 0px !important;
    }
    h5 {
        margin-bottom: 0px !important;
        margin-top: 8px;
    }
    h6 {
        margin-top : 10px;
    }

    ul {
        color : white;
    }
    li {
        margin-bottom: 5px;
    }

    img {
        height:130px;
    }

    .flexLine {
        display: flex;
    }

    .school {
        margin-left: 30px;
        width: 100%;
        color: white;
    }

    .section {
        width:100%;
    }
    #head {
        display: flex;
        margin-left: 20px;
        margin-right: 20px;
    }

    .education {
        position: relative;
    }

    .education::after {
        content: '';
        position: absolute;
        right: 0;
        top: 25%;
        bottom: 5%;
        width: 2px;
        background-color: white;
    }

    @media (max-width: 800px) {
                .section {
                    display: block;
                    margin-bottom: 20px;
                }

                .flexLine {
                    flex-direction: column;
                    align-items: center;
                }

                .school {
                    margin-left: 0;
                    text-align: center;
                }

                img.school-icon {
                    margin-bottom: 10px;
                }
                .flexStack {
                    flex-direction: column;
                    align-items: center;
                }
            }
</style>